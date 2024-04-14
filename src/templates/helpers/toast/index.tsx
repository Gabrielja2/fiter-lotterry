import {
  ToastContent,
  ToastOptions,
  toast,
  ToastContainer,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastifyAdapter = {
  toast(
    content: ToastContent<unknown>,
    options?: ToastOptions<object> | undefined
  ) {
    return toast(content, options);
  },

  toastContainer() {
    return <ToastContainer />;
  },
};
