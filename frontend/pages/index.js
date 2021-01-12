import Menu from '../components/Menu';
import './_app';


function HomePage({data}) {
    return (
      <>
      <Menu />
      <h1>Minha metas:</h1>
      <p>
        {console.log(data.MetasModels)}
        {
          data.MetasModels.map(meta => (
            <div key={meta._id}>
              <h2>Nome: {meta.name}</h2>
              <h2>Descrição: {meta.description}</h2>
              <h2>Status: {meta.status}</h2>
              <hr/>
            </div>
          ))
        }
      </p>
      </>
    );
}
  
export async function getServerSideProps(context) {
    const api = await fetch(`http://localhost:8000/listarMetas`);
    const data = await api.json(); 
    console.log(data);
    if (!data) {
        return {
          notFound: true,
        }
      }

    return { props: { data } };
}

export default HomePage;