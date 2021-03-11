import Aux from '../../hoc/Auxiliary';
import './Layout.css';

function Layout(props) {
  return (
    <Aux>
      <div>
        Toolbar, Sidebar, Backdrop
      </div>
      <main className={"Content"}>
        {props.children}
      </main>
    </Aux>
  );
}

export default Layout;