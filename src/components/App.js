// importing components
import Layout from './Layout/Layout';
import RouteComponent from './Route';

// App component
function App() {
  return (
    <div className="App d-flex flex-column">
      <Layout>
        <RouteComponent />
      </Layout>
    </div>
  );
}

export default App;
