import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { useDispatch, useSelector } from "react-redux";

import { selectQuizzes, deleteQuiz } from "./quizSlice";
import { deleteQuizFromTopic } from "../topics/topicSlice";

export default function Topic() {
  const quizzes = useSelector(selectQuizzes);
  let { quizId } = useParams();
  const quiz = quizzes[quizId];
  const dispatch = useDispatch();

  const handleDeleteButton = (event, quizId) => {
    dispatch(deleteQuiz(quizId));
    dispatch(deleteQuizFromTopic(quiz.topicId, quizId));
  }

  return (
    <section className="center">
      <h1>{quiz.name}</h1>

      <Link to={ROUTES.newCardRoute(quiz.id)} className="button plus-button">
        + New Card
      </Link>
      <br /><br />

      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>

      <table style={{width: "100%"}}><tbody>
        <tr>
          <td>
            <Link to={ROUTES.quizzesRoute()} className="button center red" onClick={(e) => handleDeleteButton(e, quiz.id)}>
              Delete this Quiz
            </Link>
          </td>
          <td>
            <Link to={ROUTES.newQuizRoute()} className="button center">
              Create New Quiz
            </Link>
          </td>
        </tr>
      </tbody></table>

    </section>
  );
}
