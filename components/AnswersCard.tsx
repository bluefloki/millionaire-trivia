import classNames from "classnames";
import ReactMarkdown from "react-markdown";

type Props = {
  array: string[];
  setSelectedAnswer: ([any]: any) => any;
  selectedAnswer: string;
  correctAnswer: string;
  gamePaused: boolean;
};

export default function AnswersCard({
  setSelectedAnswer,
  array,
  selectedAnswer,
  correctAnswer,
  gamePaused,
}: Props) {
  return array.map((el: any, idx: any) => (
    <div
      key={idx}
      onClick={() => setSelectedAnswer(() => el)}
      className={classNames(
        "btn w-full normal-case text-lg font-normal border-2 border-[#28476B]",
        {
          "border-[#2B8DEC] bg-[#2B8DEC]": selectedAnswer == el,
          "border-green-500 bg-green-500":
            gamePaused === true && el == correctAnswer,
          "border-red-500 bg-red-500":
            gamePaused === true && el !== correctAnswer && selectedAnswer == el,
        }
      )}
    >
      <ReactMarkdown>{el}</ReactMarkdown>
    </div>
  ));
}
