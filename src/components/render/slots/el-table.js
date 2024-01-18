/* eslint-disable no-undef */
export default {
  columns(h, conf, key) {
    const list = []
    conf.__slot__.columns.forEach(item => {
      const { __config__ } = item
      console.log(__config__)
      if (__config__.children) {
        // 用h函数渲染生成
        list.push(
          <el-table-column
            prop={item.prop}
            label={item.label}
          >
          </el-table-column>
        )
      } else {
        list.push(
          <el-table-column
            prop={item.prop}
            label={item.label}
          >
          </el-table-column>
        )
      }
    })
    return list
  }
}
