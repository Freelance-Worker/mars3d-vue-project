/**
 * �����ͨ��name��ȡwidget����
 * @copyright ���ǿƼ� mars3d.cn
 * @author ���������� 2021-12-30
 */
import { useStore } from "vuex"

export default function useWidget(name: string): () => any {
  const store = useStore()

  const pannel = store.state.widgets.find((item: any) => item.name === name)

  return () => pannel
}
