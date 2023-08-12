import BoardSection from "./BoardSection";


const Board = ({data}) => {
    return (
        <div>
            <BoardSection title="Momentum" forums={data && data["momentum"]}></BoardSection>
            <BoardSection title="General & Off-topic" forums={data && data["general"]}></BoardSection>
        </div>
    );
};

export default Board;
