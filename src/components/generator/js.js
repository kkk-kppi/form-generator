import { isArray } from 'util'
import { exportDefault, titleCase, deepClone } from '@/utils/index'
import ruleTrigger from './ruleTrigger'

const units = {
  KB: '1024',
  MB: '1024 / 1024',
  GB: '1024 / 1024 / 1024'
}
let confGlobal
const inheritAttrs = {
  file: '',
  dialog: 'inheritAttrs: false,'
}

/**
 * 组装js 【入口函数】
 * @param {Object} formConfig 整个表单配置
 * @param {String} type 生成类型，文件或弹窗等
 */
export function makeUpJs(formConfig, type) {
  confGlobal = formConfig = deepClone(formConfig)
  const dataList = []
  const ruleList = []
  const optionsList = []
  const propsList = []
  const methodList = mixinMethod(type)
  const uploadVarList = []
  const created = []

  formConfig.fields.forEach(el => {
    buildAttributes(el, dataList, ruleList, optionsList, methodList, propsList, uploadVarList, created)
  })

  const script = buildexport(
    formConfig,
    type,
    dataList.join('\n'),
    ruleList.join('\n'),
    optionsList.join('\n'),
    uploadVarList.join('\n'),
    propsList.join('\n'),
    methodList.join('\n'),
    created.join('\n')
  )
  confGlobal = null
  return script
}

/**
 * 构建组件的属性
 * @param {Object} scheme - 组件对象
 * @param {Array} dataList - 数据列表
 * @param {Array} ruleList - 规则列表
 * @param {Array} optionsList - 选项列表
 * @param {Array} methodList - 方法列表
 * @param {Array} propsList - props列表
 * @param {Array} uploadVarList - upload变量列表
 * @param {Function} created - 收集在created中执行的函数的列表
 */
function buildAttributes(scheme, dataList, ruleList, optionsList, methodList, propsList, uploadVarList, created) {
  const config = scheme.__config__
  const slot = scheme.__slot__
  // 1. 生成SFC中的数据，即data() { return {} }
  buildData(scheme, dataList)

  // 2. 生成el-form的表单校验规则
  buildRules(scheme, ruleList)

  // 3. 处理组件的options选项，包括静态的和动态的
  if (scheme.options || (slot && slot.options && slot.options.length)) {
    // 3.1 处理静态的options选项
    buildOptions(scheme, optionsList)

    // 3.2 处理动态的options选项，包含对应的请求方法，并注入到created hook中
    if (config.dataType === 'dynamic') {
      const model = `${scheme.__vModel__}Options`
      const options = titleCase(model)
      const methodName = `get${options}`
      buildOptionMethod(methodName, model, methodList, scheme)
      callInCreated(methodName, created)
    }
  }

  // 处理props
  if (scheme.props && scheme.props.props) {
    buildProps(scheme, propsList)
  }

  // 处理el-upload的action
  if (scheme.action && config.tag === 'el-upload') {
    uploadVarList.push(
      `${scheme.__vModel__}Action: '${scheme.action}',
      ${scheme.__vModel__}fileList: [],`
    )
    methodList.push(buildBeforeUpload(scheme))
    // 非自动上传时，生成手动上传的函数
    if (!scheme['auto-upload']) {
      methodList.push(buildSubmitUpload(scheme))
    }
  }

  // 构建子级组件属性
  if (config.children) {
    config.children.forEach(item => {
      buildAttributes(item, dataList, ruleList, optionsList, methodList, propsList, uploadVarList, created)
    })
  }
}

// 在Created调用函数
function callInCreated(methodName, created) {
  created.push(`this.${methodName}()`)
}

// 混入处理函数
function mixinMethod(type) {
  const list = []; const
    minxins = {
      file: confGlobal.formBtns ? {
        submitForm: `
          submitForm() {
            this.$refs['${confGlobal.formRef}'].validate(valid => {
              if(!valid) return
              // TODO 提交表单
            })
          },
        `,
        resetForm: `
          resetForm() {
            this.$refs['${confGlobal.formRef}'].resetFields()
          },
        `
      } : null,
      dialog: {
        onOpen: 'onOpen() {},',
        onClose: `
          onClose() {
            this.$refs['${confGlobal.formRef}'].resetFields()
          },
        `,
        close: `
          close() {
            this.$emit('update:visible', false)
          },
        `,
        handelConfirm: `
          handelConfirm() {
            this.$refs['${confGlobal.formRef}'].validate(valid => {
              if(!valid) return
            this.close()
            })
          },
        `
      }
    }

  const methods = minxins[type]
  if (methods) {
    Object.keys(methods).forEach(key => {
      list.push(methods[key])
    })
  }

  return list
}

/**
 * 根据给定的数据方案和数据列表生成数据，用于SFC中的data(){return { 结果 }}
 * @param {Object} scheme - 数据方案对象
 * @param {Array} dataList - 存储生成的数据列表
 */
function buildData(scheme, dataList) {
  const config = scheme.__config__
  // 如果数据方案没有定义 vModel，则直接返回
  if (scheme.__vModel__ === undefined) return
  const defaultValue = JSON.stringify(config.defaultValue)
  dataList.push(`${scheme.__vModel__}: ${defaultValue},`)
}

/**
 * 构建表单项的校验规则
 * @param {Record<string, any>} scheme - 表单项的配置json格式数据
 * @param {Array} ruleList
 */
function buildRules(scheme, ruleList) {
  const config = scheme.__config__
  if (scheme.__vModel__ === undefined) return
  const rules = []
  if (ruleTrigger[config.tag]) {
    // 只对必填的表单项生成校验规则
    if (config.required) {
      const type = isArray(config.defaultValue) ? 'type: \'array\',' : ''
      let message = isArray(config.defaultValue) ? `请至少选择一个${config.label}` : scheme.placeholder
      if (message === undefined) message = `${config.label}不能为空`
      rules.push(`{ required: true, ${type} message: '${message}', trigger: '${ruleTrigger[config.tag]}' }`)
    }
    // 将属性配置中的规则，加入到rules数组中
    if (config.regList && isArray(config.regList)) {
      config.regList.forEach(item => {
        if (item.pattern) {
          rules.push(
            `{ pattern: ${eval(item.pattern)}, message: '${item.message}', trigger: '${ruleTrigger[config.tag]}' }`
          )
        }
      })
    }
    // 凭借最终生成的规则，格式Record<String, Array<{type: string, message: string, trigger: string}>>
    ruleList.push(`${scheme.__vModel__}: [${rules.join(',')}],`)
  }
}

// 构建options
function buildOptions(scheme, optionsList) {
  if (scheme.__vModel__ === undefined) return
  // el-cascader直接有options属性，其他组件都是定义在slot中，所以有两处判断
  let { options } = scheme
  if (!options) options = scheme.__slot__.options
  if (scheme.__config__.dataType === 'dynamic') { options = [] }
  const str = `${scheme.__vModel__}Options: ${JSON.stringify(options)},`
  optionsList.push(str)
}

function buildProps(scheme, propsList) {
  const str = `${scheme.__vModel__}Props: ${JSON.stringify(scheme.props.props)},`
  propsList.push(str)
}

// el-upload的BeforeUpload
function buildBeforeUpload(scheme) {
  const config = scheme.__config__
  const unitNum = units[config.sizeUnit]; let rightSizeCode = ''; let acceptCode = ''; const
    returnList = []
  // 判断文件大小
  if (config.fileSize) {
    rightSizeCode = `
      let isRightSize = file.size / ${unitNum} < ${config.fileSize}
      if(!isRightSize){
        this.$message.error('文件大小超过 ${config.fileSize}${config.sizeUnit}')
        return false
      }
    `
    returnList.push('isRightSize')
  }
  // 判断文件类型
  if (scheme.accept) {
    acceptCode = `
      let isAccept = new RegExp('${scheme.accept}').test(file.type)
      if(!isAccept){
        this.$message.error('应该选择${scheme.accept}类型的文件')
        return false
      }
    `
    returnList.push('isAccept')
  }
  const str = `
    ${scheme.__vModel__}BeforeUpload(file) {
      ${rightSizeCode}
      ${acceptCode}
      if(${returnList.join('&&')}) {

      }
      return ${returnList.join('&&')}
    },
  `
  return returnList.length ? str : ''
}

// el-upload的submit
function buildSubmitUpload(scheme) {
  const str = `
    submitUpload() {
      this.$refs['${scheme.__vModel__}'].submit()
    },
  `
  return str
}

/**
 * 为指定方法生成methods中的函数方法
 * @param {string} methodName - 方法名
 * @param {string} model - 指定的数据模型名
 * @param {array} methodList - 存储生成的方法列表
 * @param {object} scheme - 方案对象
 */
function buildOptionMethod(methodName, model, methodList, scheme) {
  const config = scheme.__config__
  const str = `
    ${methodName}() {
      // 注意：this.$axios是通过Vue.prototype.$axios = axios挂载产生的，请根据项目的实际情况修改
      this.$axios({
        method: '${config.method}',
        url: '${config.url}'
      }).then(resp => {
        var { data } = resp
        this.${model} = data.${config.dataPath}
      })
    },
  `
  methodList.push(str)
}

// js整体拼接
function buildexport(conf, type, data, rules, selectOptions, uploadVar, props, methods, created) {
  const str = `
    ${exportDefault} {
      ${inheritAttrs[type]}
      components: {},
      props: [],
      data () {
        return {
          ${conf.formModel}: {
            ${data}
          },
          ${conf.formRules}: {
            ${rules}
          },
          ${uploadVar}
          ${selectOptions}
          ${props}
        }
      },
      computed: {},
      watch: {},
      created () {
        ${created}
      },
      mounted () {},
      methods: {
        ${methods}
      }
    }
  `
  return str
}
