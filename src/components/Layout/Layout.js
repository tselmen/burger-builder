import Aux from '../../hoc/Auxiliary';

function Layout(props) {
  return (
    <Aux>
      <div>
        Toolbar, Sidebar, Backdrop
      </div>
      <main>
        {props.children}
      </main>
    </Aux>
  );
}

export default Layout;