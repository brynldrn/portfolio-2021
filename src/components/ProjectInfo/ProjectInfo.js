import { useQuery, gql } from '@apollo/client';
import Loader from '../Loader/Loader';
import ReactMarkdown from 'react-markdown';

const ProjectInfo = ({ id }) => {

  const PROJECT_QUERY = gql`
  {
    projects(where: { id: "${id}" }) {
      name
      gallery {
        url
      },
      longMd,
      tech
    }
  }
`;

  const { loading, data, error } = useQuery(PROJECT_QUERY);

  if (loading) return <Loader/>;
  if (error) return 'error';

  return (
    <section className="project-info">
      <div className="project-info__title">{ data.projects[0].name }</div>
      <div className="grid-container --flex">
        <div className="project-info__content">
          {
            data.projects[0].gallery.map(({ url }, key) => (
              <figure key={key} >
                <img src={url} alt="Gallery Image"/>
              </figure>
            ))
          }
          <p><strong>Technologies used:</strong> { data.projects[0].tech }</p>
          {/* from MD */}
          <ReactMarkdown>{ data.projects[0].longMd }</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;