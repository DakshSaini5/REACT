export default function Color({
    onChangeColor
}) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onChangeColor();
        }}> CHANGE COLOR</button>
    );
}