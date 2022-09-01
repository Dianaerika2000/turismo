import { useParams } from 'react-router-dom';
export default function ListExamplePage() {
  let params = useParams();
  console.log(params);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>List {params.listId}</h1>
        </div>
      </div>
    </div>
  );
}
