import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../app/routes";
import { addCard } from "../features/cards/cardSlice";
import { insertCardToQuiz, selectQuizzes } from "../features/quizzes/quizSlice";
import { v4 as uuidv4 } from "uuid";

export default function NewCardForm() {
    let { quizId } = useParams();
    const quizzes = useSelector(selectQuizzes);
    const quiz = quizzes[quizId];
    const [card, setCard] = useState({front: "", back: ""});
    const dispatch = useDispatch();

    const updateCardState = (side, value) => {
        setCard(
            prev => ({...card, [side]: value})
        );
    }

    const handleSubmitCard = () => {
        const id = uuidv4();
        dispatch(addCard(id, card.front, card.back));
        dispatch(insertCardToQuiz(id, quizId));
    }

    // Path Validation
    if (!quiz || quizId !== quiz.id) {
        const msg = quiz ? quiz.id : "does not exist."
        return (
            <section className="center">
                <h1>ERROR - Invalid Quiz ID</h1>
                <p>{quizId} {msg}</p>
            </section>
        );
    }

    return (
        <section className="center">
            <h1>Insert new card for: {quiz.name}</h1>
            <div className="card-front-back">
                <input
                    id={`card-front`}
                    value={card.front}
                    onChange={(e) =>
                        updateCardState("front", e.currentTarget.value)
                    }
                    placeholder="Front"
                />

                <input
                    id={`card-back`}
                    value={card.back}
                    onChange={(e) =>
                        updateCardState("back", e.currentTarget.value)
                    }
                    placeholder="Back"
                />
            </div>
            <Link to={ROUTES.quizRoute(quizId)} class="button" onClick={(e) => handleSubmitCard()}>
                Create Card
            </Link>
        </section>
    )
}