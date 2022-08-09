import React from "react";

const replaceLineBreak = (text: string): JSX.Element[] => {
    return text.split("\n").map((txt) => (
            <>{txt}<br /></>
        ));
}

export default replaceLineBreak;