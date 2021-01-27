import { useQuery, gql } from '@apollo/client';
import Loader from '../components/Loader/Loader';
import Card from '../components/Card/Card';

const Home = () => {
  const PROJECTS_QUERY = gql`
    {
      projects {
        id
        name
        imageCap {
          url
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(PROJECTS_QUERY);

  if (loading) {
    return (
      <section className="projects">
        <Loader />
      </section>
    );
  }

  if (error) return 'error';

  console.log(data);

  return (
    <section className="projects">
      <div className="grid-container --flex">
        {
          data.projects.map((card, key) => {
            return <Card key={key} id={card.id} content={card} />;
          })
        }
      </div>
    </section>
  );
}

export default Home;