import { deepClone } from '@/utils/index'
import {
  makeDataObject, buildDataObject, emitEvents, mountSlotFiles
} from '../render.js'

// export default {
//   columns(h, conf, key) {
//     const list = []
//     conf.__slot__.columns.forEach(item => {
//       const { __config__ } = item
//       const renderElement = renderVNode.call(this, h, __config__)
//       list.push(
//         <el-table-column
//           prop={item.prop}
//           label={item.label}
//         >
//           {renderElement}
//         </el-table-column>
//       )
//     })
//     return list
//   }
// }

/**
 * @param {import("vue").CreateElement} h
 * @returns {import("vue").VNode}
 */
function renderVNode(h, conf) {
  const dataObject = makeDataObject()
  const confClone = deepClone(conf)

  mountSlotFiles.call(this, h, {
    __config__: confClone
  })

  emitEvents.call(this, confClone)

  buildDataObject.call(this, dataObject, dataObject)

  return h(conf.tag, dataObject)
}
