import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { selectQuizzes } from "./quizSlice";

export default function Topic() {
  const quizzes = useSelector(selectQuizzes);
  let { quizId } = useParams();
  const quiz = quizzes[quizId];

  // TODO
  const handlePlusButton = (event) => {
    event.preventDefault();
    alert("wow");
  }

  return (
    <section className="center">
      <h1>{quiz.name}</h1>
      <button className="plus-button" onClick={(e) => handlePlusButton(e)}>+ New Card</button>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
