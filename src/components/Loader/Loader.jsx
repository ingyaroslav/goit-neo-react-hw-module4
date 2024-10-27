import { TailSpin } from 'react-loader-spinner'
import css from './Loader.module.css'

const Loader = ({ loader }) => {   
    return (
        <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loader}
            className={css.Loader}
        />
    )
}

export default Loader