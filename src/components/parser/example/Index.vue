<template>
  <div class="test-form">
    <parser :form-conf="formConf" @submit="sumbitForm1" />
    <parser :key="key2" :form-conf="formConf" @submit="sumbitForm2" />
    <el-button @click="change">
      change
    </el-button>
    <parser :key="key3" :form-conf="formConf3" @submit="sumbitForm3" />
  </div>
</template>

<script>
import Parser from '../Parser'

// 若parser是通过安装npm方式集成到项目中的，使用此行引入
// import Parser from 'form-gen-parser'

export default {
  components: {
    Parser
  },
  props: {},
  data() {
    return {
      key2: +new Date(),
      formConf: {
        fields: [
          {
            __config__: {
              label: '单行文本',
              labelWidth: null,
              showLabel: true,
              changeTag: true,
              tag: 'el-input',
              tagIcon: 'input',
              required: true,
              layout: 'colFormItem',
              span: 24,
              document: 'https://element.eleme.cn/#/zh-CN/component/input',
              regList: [
                {
                  pattern: '/^1(3|4|5|7|8|9)\\d{9}$/',
                  message: '手机号格式错误'
                }
              ]
            },
            __slot__: {
              prepend: '',
              append: ''
            },
            __vModel__: 'mobile',
            placeholder: '请输入手机号',
            style: {
              width: '100%'
            },
            clearable: true,
            'prefix-icon': 'el-icon-mobile',
            'suffix-icon': '',
            maxlength: 11,
            'show-word-limit': true,
            readonly: false,
            disabled: false
          },
          {
            __config__: {
              label: '日期范围',
              tag: 'el-date-picker',
              tagIcon: 'date-range',
              defaultValue: null,
              span: 24,
              showLabel: true,
              labelWidth: null,
              required: true,
              layout: 'colFormItem',
              regList: [],
              changeTag: true,
              document:
                'https://element.eleme.cn/#/zh-CN/component/date-picker',
              formId: 101,
              renderKey: 1585980082729
            },
            style: {
              width: '100%'
            },
            type: 'daterange',
            'range-separator': '至',
            'start-placeholder': '开始日期',
            'end-placeholder': '结束日期',
            disabled: false,
            clearable: true,
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd',
            readonly: false,
            __vModel__: 'field101'
          },
          {
            __config__: {
              layout: 'rowFormItem',
              tagIcon: 'row',
              label: '行容器',
              layoutTree: true,
              children: [
                {
                  __config__: {
                    label: '评分',
                    tag: 'el-rate',
                    tagIcon: 'rate',
                    defaultValue: 0,
                    span: 24,
                    showLabel: true,
                    labelWidth: null,
                    layout: 'colFormItem',
                    required: true,
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/rate',
                    formId: 102,
                    renderKey: 1586839671259
                  },
                  style: {},
                  max: 5,
                  'allow-half': false,
                  'show-text': false,
                  'show-score': false,
                  disabled: false,
                  __vModel__: 'field102'
                }
              ],
              document: 'https://element.eleme.cn/#/zh-CN/component/layout',
              formId: 101,
              span: 24,
              renderKey: 1586839668999,
              componentName: 'row101',
              gutter: 15
            },
            type: 'default',
            justify: 'start',
            align: 'top'
          },
          {
            __config__: {
              label: '按钮',
              showLabel: true,
              changeTag: true,
              labelWidth: null,
              tag: 'el-button',
              tagIcon: 'button',
              span: 24,
              layout: 'colFormItem',
              document: 'https://element.eleme.cn/#/zh-CN/component/button',
              renderKey: 1594288459289
            },
            __slot__: {
              default: '测试按钮1'
            },
            type: 'primary',
            icon: 'el-icon-search',
            round: false,
            size: 'medium',
            plain: false,
            circle: false,
            disabled: false,
            on: {
              click: 'clickTestButton1'
            }
          }
        ],
        __methods__: {
          clickTestButton1() {
            console.log(
              `%c【测试按钮1】点击事件里可以访问当前表单：
                1) formModel='formData', 所以this.formData可以拿到当前表单的model
                2) formRef='elForm', 所以this.$refs.elForm可以拿到当前表单的ref(vue组件)
              `,
              'color:#409EFF;font-size: 15px'
            )
            console.log('表单的Model：', this.formData)
            console.log('表单的ref：', this.$refs.elForm)
          }
        },
        formRef: 'elForm',
        formModel: 'formData',
        size: 'small',
        labelPosition: 'right',
        labelWidth: 100,
        formRules: 'rules',
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true,
        unFocusedComponentBorder: false
      },
      formConf2: {
        fields: [
          {
            __config__: {
              label: '单行文本',
              labelWidth: null,
              showLabel: true,
              changeTag: true,
              tag: 'el-input',
              tagIcon: 'input',
              required: true,
              layout: 'colFormItem',
              span: 24,
              document: 'https://element.eleme.cn/#/zh-CN/component/input',
              regList: [
                {
                  pattern: '/^1(3|4|5|7|8|9)\\d{9}$/',
                  message: '手机号格式错误'
                }
              ]
            },
            __slot__: {
              prepend: '',
              append: ''
            },
            __vModel__: 'mobile',
            placeholder: '请输入手机号',
            style: {
              width: '100%'
            },
            clearable: true,
            'prefix-icon': 'el-icon-mobile',
            'suffix-icon': '',
            maxlength: 11,
            'show-word-limit': true,
            readonly: false,
            disabled: false
          },
          {
            __config__: {
              label: '日期范围',
              tag: 'el-date-picker',
              tagIcon: 'date-range',
              defaultValue: null,
              span: 24,
              showLabel: true,
              labelWidth: null,
              required: true,
              layout: 'colFormItem',
              regList: [],
              changeTag: true,
              document:
                'https://element.eleme.cn/#/zh-CN/component/date-picker',
              formId: 101,
              renderKey: 1585980082729
            },
            style: {
              width: '100%'
            },
            type: 'daterange',
            'range-separator': '至',
            'start-placeholder': '开始日期',
            'end-placeholder': '结束日期',
            disabled: false,
            clearable: true,
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd',
            readonly: false,
            __vModel__: 'field101'
          }
        ],
        formRef: 'elForm',
        formModel: 'formData',
        size: 'small',
        labelPosition: 'right',
        labelWidth: 100,
        formRules: 'rules',
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true,
        unFocusedComponentBorder: false
      },
      key3: +new Date().getTime() + 1,
      formConf3: {
        fields: [
          {
            __config__: {
              label: '单行文本',
              labelWidth: null,
              showLabel: true,
              changeTag: true,
              tag: 'el-input',
              tagIcon: 'input',
              required: true,
              layout: 'colFormItem',
              span: 24,
              document: 'https://element.eleme.cn/#/zh-CN/component/input',
              regList: [],
              formId: 101,
              renderKey: '1011705634370868'
            },
            __slot__: {
              prepend: '',
              append: ''
            },
            placeholder: '请输入单行文本',
            style: {
              width: '100%'
            },
            clearable: true,
            'prefix-icon': '',
            'suffix-icon': '',
            maxlength: null,
            'show-word-limit': false,
            readonly: false,
            disabled: false,
            __vModel__: 'field101'
          },
          {
            __config__: {
              label: '多行文本',
              labelWidth: null,
              showLabel: true,
              tag: 'el-input',
              tagIcon: 'textarea',
              required: true,
              layout: 'colFormItem',
              span: 24,
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/input',
              formId: 102,
              renderKey: 1705643806294,
              defaultValue: '1231231231231231231231231231211111'
            },
            type: 'textarea',
            placeholder: '请输入多行文本',
            autosize: {
              minRows: 2,
              maxRows: 3
            },
            style: {
              width: '100%'
            },
            maxlength: null,
            'show-word-limit': false,
            readonly: false,
            disabled: false,
            __vModel__: 'field102'
          },
          {
            __config__: {
              label: '密码',
              showLabel: true,
              labelWidth: null,
              changeTag: true,
              tag: 'el-input',
              tagIcon: 'password',
              layout: 'colFormItem',
              span: 24,
              required: true,
              regList: [],
              document: 'https://element.eleme.cn/#/zh-CN/component/input',
              formId: 103,
              renderKey: '1031705634375460'
            },
            __slot__: {
              prepend: '',
              append: ''
            },
            placeholder: '请输入密码',
            'show-password': true,
            style: {
              width: '100%'
            },
            clearable: true,
            'prefix-icon': '',
            'suffix-icon': '',
            maxlength: null,
            'show-word-limit': false,
            readonly: false,
            disabled: false,
            __vModel__: 'field103'
          },
          {
            __config__: {
              label: '计数器',
              showLabel: true,
              changeTag: true,
              labelWidth: null,
              tag: 'el-input-number',
              tagIcon: 'number',
              span: 24,
              layout: 'colFormItem',
              required: true,
              regList: [],
              document: 'https://element.eleme.cn/#/zh-CN/component/input-number',
              formId: 104,
              renderKey: '1041705634377586'
            },
            placeholder: '计数器',
            step: 1,
            'step-strictly': false,
            'controls-position': '',
            disabled: false,
            __vModel__: 'field104'
          },
          {
            __config__: {
              label: '编辑器',
              showLabel: true,
              changeTag: true,
              labelWidth: null,
              tag: 'tinymce',
              tagIcon: 'rich-text',
              defaultValue: null,
              span: 24,
              layout: 'colFormItem',
              required: true,
              regList: [],
              document: 'http://tinymce.ax-z.cn',
              formId: 105,
              renderKey: 1705644128286
            },
            placeholder: '请输入编辑器',
            height: 250,
            branding: false,
            __vModel__: 'field105'
          },
          {
            __config__: {
              label: '下拉选择',
              showLabel: true,
              labelWidth: null,
              tag: 'el-select',
              tagIcon: 'select',
              layout: 'colFormItem',
              span: 24,
              required: true,
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/select',
              formId: 106,
              renderKey: '1061705634380467'
            },
            __slot__: {
              options: [
                {
                  label: '选项一',
                  value: 1
                },
                {
                  label: '选项二',
                  value: 2
                }
              ]
            },
            placeholder: '请选择下拉选择',
            style: {
              width: '100%'
            },
            clearable: true,
            disabled: false,
            filterable: false,
            multiple: false,
            __vModel__: 'field106'
          },
          {
            __config__: {
              label: '级联选择',
              url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList',
              method: 'get',
              dataPath: 'list',
              dataConsumer: 'options',
              showLabel: true,
              labelWidth: null,
              tag: 'el-cascader',
              tagIcon: 'cascader',
              layout: 'colFormItem',
              defaultValue: [],
              dataType: 'dynamic',
              span: 24,
              required: true,
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/cascader',
              formId: 107,
              renderKey: '1071705634381587'
            },
            options: [
              {
                id: 1,
                value: 1,
                label: '动态选项1',
                children: [
                  {
                    id: 2,
                    value: 2,
                    label: '动态选项1-1'
                  }
                ]
              }
            ],
            placeholder: '请选择级联选择',
            style: {
              width: '100%'
            },
            props: {
              props: {
                multiple: false,
                label: 'label',
                value: 'value',
                children: 'children'
              }
            },
            'show-all-levels': true,
            disabled: false,
            clearable: true,
            filterable: false,
            separator: '/',
            __vModel__: 'field107'
          },
          {
            __config__: {
              label: '单选框组',
              labelWidth: null,
              showLabel: true,
              tag: 'el-radio-group',
              tagIcon: 'radio',
              changeTag: true,
              layout: 'colFormItem',
              span: 24,
              optionType: 'default',
              regList: [],
              required: true,
              border: false,
              document: 'https://element.eleme.cn/#/zh-CN/component/radio',
              formId: 108,
              renderKey: '1081705634382452'
            },
            __slot__: {
              options: [
                {
                  label: '选项一',
                  value: 1
                },
                {
                  label: '选项二',
                  value: 2
                }
              ]
            },
            style: {},
            size: 'medium',
            disabled: false,
            __vModel__: 'field108'
          },
          {
            __config__: {
              label: '多选框组',
              tag: 'el-checkbox-group',
              tagIcon: 'checkbox',
              defaultValue: [],
              span: 24,
              showLabel: true,
              labelWidth: null,
              layout: 'colFormItem',
              optionType: 'default',
              required: true,
              regList: [],
              changeTag: true,
              border: false,
              document: 'https://element.eleme.cn/#/zh-CN/component/checkbox',
              formId: 109,
              renderKey: '1091705634383035'
            },
            __slot__: {
              options: [
                {
                  label: '选项一',
                  value: 1
                },
                {
                  label: '选项二',
                  value: 2
                }
              ]
            },
            style: {},
            size: 'medium',
            disabled: false,
            __vModel__: 'field109'
          },
          {
            __config__: {
              label: '开关',
              tag: 'el-switch',
              tagIcon: 'switch',
              defaultValue: false,
              span: 24,
              showLabel: true,
              labelWidth: null,
              layout: 'colFormItem',
              required: true,
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/switch',
              formId: 110,
              renderKey: '1101705634384564'
            },
            style: {},
            disabled: false,
            'active-text': '',
            'inactive-text': '',
            'active-color': null,
            'inactive-color': null,
            'active-value': true,
            'inactive-value': false,
            __vModel__: 'field110'
          },
          {
            __config__: {
              label: '滑块',
              tag: 'el-slider',
              tagIcon: 'slider',
              defaultValue: 0,
              span: 24,
              showLabel: true,
              layout: 'colFormItem',
              labelWidth: null,
              required: true,
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/slider',
              formId: 111,
              renderKey: '1111705634385147'
            },
            disabled: false,
            min: 0,
            max: 100,
            step: 1,
            'show-stops': false,
            range: false,
            __vModel__: 'field111'
          },
          {
            __config__: {
              label: '时间选择',
              tag: 'el-time-picker',
              tagIcon: 'time',
              defaultValue: null,
              span: 24,
              showLabel: true,
              layout: 'colFormItem',
              labelWidth: null,
              required: true,
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/time-picker',
              formId: 112,
              renderKey: '1121705634386539'
            },
            placeholder: '请选择时间选择',
            style: {
              width: '100%'
            },
            disabled: false,
            clearable: true,
            'picker-options': {
              selectableRange: '00:00:00-23:59:59'
            },
            format: 'HH:mm:ss',
            'value-format': 'HH:mm:ss',
            __vModel__: 'field112'
          },
          {
            __config__: {
              label: '时间范围',
              tag: 'el-time-picker',
              tagIcon: 'time-range',
              span: 24,
              showLabel: true,
              labelWidth: null,
              layout: 'colFormItem',
              defaultValue: [
                '13:58:04',
                '14:58:04'
              ],
              required: true,
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/time-picker',
              formId: 113,
              renderKey: '1131705634387179'
            },
            style: {
              width: '100%'
            },
            disabled: false,
            clearable: true,
            'is-range': true,
            'range-separator': '至',
            'start-placeholder': '开始时间',
            'end-placeholder': '结束时间',
            format: 'HH:mm:ss',
            'value-format': 'HH:mm:ss',
            __vModel__: 'field113'
          },
          {
            __config__: {
              label: '日期选择',
              tag: 'el-date-picker',
              tagIcon: 'date',
              defaultValue: null,
              showLabel: true,
              labelWidth: null,
              span: 24,
              layout: 'colFormItem',
              required: true,
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/date-picker',
              formId: 114,
              renderKey: '1141705634388515'
            },
            placeholder: '请选择日期选择',
            type: 'date',
            style: {
              width: '100%'
            },
            disabled: false,
            clearable: true,
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd',
            readonly: false,
            __vModel__: 'field114'
          },
          {
            __config__: {
              label: '日期范围',
              tag: 'el-date-picker',
              tagIcon: 'date-range',
              defaultValue: null,
              span: 24,
              showLabel: true,
              labelWidth: null,
              required: true,
              layout: 'colFormItem',
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/date-picker',
              formId: 115,
              renderKey: '1151705634389051'
            },
            style: {
              width: '100%'
            },
            type: 'daterange',
            'range-separator': '至',
            'start-placeholder': '开始日期',
            'end-placeholder': '结束日期',
            disabled: false,
            clearable: true,
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd',
            readonly: false,
            __vModel__: 'field115'
          },
          {
            __config__: {
              label: '评分',
              tag: 'el-rate',
              tagIcon: 'rate',
              defaultValue: 0,
              span: 24,
              showLabel: true,
              labelWidth: null,
              layout: 'colFormItem',
              required: true,
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/rate',
              formId: 116,
              renderKey: '1161705634389691'
            },
            style: {},
            max: 5,
            'allow-half': false,
            'show-text': false,
            'show-score': false,
            disabled: false,
            __vModel__: 'field116'
          },
          {
            __config__: {
              label: '颜色选择',
              tag: 'el-color-picker',
              tagIcon: 'color',
              span: 24,
              defaultValue: null,
              showLabel: true,
              labelWidth: null,
              layout: 'colFormItem',
              required: true,
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/color-picker',
              formId: 117,
              renderKey: '1171705634390259'
            },
            'show-alpha': false,
            'color-format': '',
            disabled: false,
            size: 'medium',
            __vModel__: 'field117'
          },
          {
            __config__: {
              label: '上传',
              tag: 'el-upload',
              tagIcon: 'upload',
              layout: 'colFormItem',
              defaultValue: null,
              showLabel: true,
              labelWidth: null,
              required: true,
              span: 24,
              showTip: false,
              buttonText: '点击上传',
              regList: [],
              changeTag: true,
              fileSize: 2,
              sizeUnit: 'MB',
              document: 'https://element.eleme.cn/#/zh-CN/component/upload',
              formId: 118,
              renderKey: '1181705634390811'
            },
            __slot__: {
              'list-type': true
            },
            action: 'https://jsonplaceholder.typicode.com/posts/',
            disabled: false,
            accept: '',
            name: 'file',
            'auto-upload': false,
            'list-type': 'text',
            multiple: false,
            __vModel__: 'field118'
          },
          {
            __config__: {
              layout: 'rowFormItem',
              tagIcon: 'row',
              layoutTree: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/layout#row-attributes',
              span: 24,
              formId: 119,
              renderKey: '1191705634391923',
              componentName: 'row119',
              children: []
            },
            type: 'default',
            justify: 'start',
            align: 'top'
          },
          // {
          //   __config__: {
          //     label: '按钮',
          //     showLabel: true,
          //     changeTag: true,
          //     labelWidth: null,
          //     tag: 'el-button',
          //     tagIcon: 'button',
          //     span: 24,
          //     layout: 'colFormItem',
          //     document: 'https://element.eleme.cn/#/zh-CN/component/button',
          //     formId: 120,
          //     renderKey: '1201705634392483'
          //   },
          //   __slot__: {
          //     default: '主要按钮'
          //   },
          //   type: 'primary',
          //   icon: 'el-icon-search',
          //   round: false,
          //   size: 'medium',
          //   plain: false,
          //   circle: false,
          //   disabled: false,
          //   __vModel__: 'field120'
          // },
          // {
          //   __config__: {
          //     layout: 'colFormItem',
          //     tagIcon: 'table',
          //     tag: 'el-table',
          //     document: 'https://element.eleme.cn/#/zh-CN/component/table',
          //     span: 24,
          //     formId: 121,
          //     renderKey: '1211705634392980',
          //     componentName: 'row101',
          //     showLabel: true,
          //     changeTag: true,
          //     labelWidth: null,
          //     label: '表格[开发中]',
          //     dataType: 'dynamic',
          //     method: 'get',
          //     dataPath: 'list',
          //     dataConsumer: 'data',
          //     url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/tableData',
          //     children: [
          //       {
          //         __config__: {
          //           layout: 'raw',
          //           tag: 'el-table-column',
          //           renderKey: '1221705634392980',
          //           children: [
          //             {
          //               __config__: {
          //                 label: '',
          //                 labelWidth: null,
          //                 showLabel: true,
          //                 changeTag: true,
          //                 tag: 'el-input',
          //                 tagIcon: 'input',
          //                 required: true,
          //                 layout: 'colFormItem',
          //                 span: 24,
          //                 document: 'https://element.eleme.cn/#/zh-CN/component/input',
          //                 regList: [],
          //                 formId: 123,
          //                 renderKey: '1231705634392980'
          //               },
          //               __slot__: {
          //                 prepend: '',
          //                 append: ''
          //               },
          //               placeholder: '请输入',
          //               style: {
          //                 width: '100%'
          //               },
          //               clearable: true,
          //               'prefix-icon': '',
          //               'suffix-icon': '',
          //               maxlength: null,
          //               'show-word-limit': false,
          //               readonly: false,
          //               disabled: false,
          //               __vModel__: 'field123'
          //             }
          //           ],
          //           formId: 122
          //         },
          //         __parent__: 'el-table',
          //         prop: 'date',
          //         label: '日期'
          //       },
          //       {
          //         __config__: {
          //           layout: 'raw',
          //           tag: 'el-table-column',
          //           renderKey: '1241705634392980',
          //           children: [
          //             {
          //               __config__: {
          //                 label: '',
          //                 labelWidth: null,
          //                 showLabel: true,
          //                 changeTag: true,
          //                 tag: 'el-input',
          //                 tagIcon: 'input',
          //                 required: true,
          //                 layout: 'colFormItem',
          //                 span: 24,
          //                 document: 'https://element.eleme.cn/#/zh-CN/component/input',
          //                 regList: [],
          //                 formId: 125,
          //                 renderKey: '1251705634392980'
          //               },
          //               __slot__: {
          //                 prepend: '',
          //                 append: ''
          //               },
          //               placeholder: '请输入',
          //               style: {
          //                 width: '100%'
          //               },
          //               clearable: true,
          //               'prefix-icon': '',
          //               'suffix-icon': '',
          //               maxlength: null,
          //               'show-word-limit': false,
          //               readonly: false,
          //               disabled: false,
          //               __vModel__: 'field125'
          //             }
          //           ],
          //           formId: 124
          //         },
          //         __parent__: 'el-table',
          //         prop: 'address',
          //         label: '地址'
          //       },
          //       {
          //         __config__: {
          //           layout: 'raw',
          //           tag: 'el-table-column',
          //           renderKey: '1261705634392980',
          //           children: [
          //             {
          //               __config__: {
          //                 label: '',
          //                 labelWidth: null,
          //                 showLabel: true,
          //                 changeTag: true,
          //                 tag: 'el-input',
          //                 tagIcon: 'input',
          //                 required: true,
          //                 layout: 'colFormItem',
          //                 span: 24,
          //                 document: 'https://element.eleme.cn/#/zh-CN/component/input',
          //                 regList: [],
          //                 formId: 127,
          //                 renderKey: '1271705634392980'
          //               },
          //               __slot__: {
          //                 prepend: '',
          //                 append: ''
          //               },
          //               placeholder: '请输入',
          //               style: {
          //                 width: '100%'
          //               },
          //               clearable: true,
          //               'prefix-icon': '',
          //               'suffix-icon': '',
          //               maxlength: null,
          //               'show-word-limit': false,
          //               readonly: false,
          //               disabled: false,
          //               __vModel__: 'field127'
          //             }
          //           ],
          //           formId: 126
          //         },
          //         __parent__: 'el-table',
          //         prop: 'name',
          //         label: '名称'
          //       }
          //     ]
          //   },
          //   data: [
          //     {
          //       date: '2020-09-09',
          //       name: 'JakHuang',
          //       address: '上海市普陀区金沙江路 2020 弄'
          //     }
          //   ],
          //   directives: [
          //     {
          //       name: 'loading',
          //       value: false
          //     }
          //   ],
          //   border: true,
          //   type: 'default',
          //   justify: 'start',
          //   align: 'top',
          //   __vModel__: 'field121'
          // }
        ],
        formRef: 'elForm',
        formModel: 'formData',
        size: 'medium',
        labelPosition: 'top',
        labelWidth: 100,
        formRules: 'rules',
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true,
        unFocusedComponentBorder: false
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // 表单数据回填，模拟异步请求场景
    setTimeout(() => {
      // 请求回来的表单数据
      const data = {
        mobile: '18836662555'
      }
      // 回填数据
      this.fillFormData(this.formConf, data)
      // 更新表单
      this.key2 = +new Date()
    }, 2000)
  },
  methods: {
    fillFormData(form, data) {
      form.fields.forEach(item => {
        const val = data[item.__vModel__]
        if (val) {
          item.__config__.defaultValue = val
        }
      })
    },
    change() {
      this.key2 = +new Date()
      const t = this.formConf
      this.formConf = this.formConf2
      this.formConf2 = t
    },
    sumbitForm1(data) {
      console.log('sumbitForm1提交数据：', data)
    },
    sumbitForm2(data) {
      console.log('sumbitForm2提交数据：', data)
    },
    sumbitForm3(data) {
      console.log('sumbitForm3提交数据：', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.test-form {
  margin: 15px auto;
  width: 800px;
  padding: 15px;
}
</style>
