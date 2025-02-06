import {
  ToastContainer as ReactToastifyContainer,
  Slide,
  toast,
} from 'react-toastify'

export const ToastContainer = () => (
  <ReactToastifyContainer transition={Slide} />
)

export { toast }
