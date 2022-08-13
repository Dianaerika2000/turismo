import Button from "../../components/Button/Button";
import Patito from "../../components/Patito/Patito";
export default function Home (props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col my-3">
          <Button />
          <Patito />
        </div>
      </div>
    </div>
  );
}