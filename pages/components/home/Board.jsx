import BoardSection from "./BoardSection";


const Board = ({data}) => {
    return (
        <div>
            <BoardSection title="Momentum" forums={data["momentum"]}></BoardSection>
            <BoardSection title="General & Off-topic" forums={data["general"]}></BoardSection>
        </div>
    );
};

export default Board;
