/**
 * ͳһ����tsģ������
 * @copyright ���ǿƼ� mars3d.cn
 * @author ľң 2021-11-01
 */

declare module "*.vue" {
  import { DefineComponent } from "vue"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "*.js" {
  export default any
}
