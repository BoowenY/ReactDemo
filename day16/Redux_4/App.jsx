import Count from "./container/Count"
import store from './redux/store'

const App = () => {
    return (
        <div>
            <Count  store={store}/>
        </div>
    )
}
export default App;