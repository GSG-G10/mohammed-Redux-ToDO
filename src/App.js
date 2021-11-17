import style from './App.module.css';
import Input from './components/input/input';

function App() {
  return (
    <div className={style.App}>
      <h1 className={style.titleH1} >TODO App</h1>
     <Input />
    </div>
  );
}

export default App;
