import Typewriter from "typewriter-effect/dist/core";

// extend based on full list of options if needed
type TypewriterOptions = {
    autoStart?: boolean;
    loop?: boolean;
    pauseFor?: number;
    cursor?: string;
};

export const useTypewriter = (elementId: string, stringList: Array<string> | string, wrapperClassName: string, options: TypewriterOptions = {}) => {
    return new Typewriter(`#${elementId.replace("#", "")}`, {
        strings: stringList instanceof Array ? stringList : formatCommaSeparatedListToArray(stringList),
        autoStart: options.autoStart ?? true,
        loop: options.loop ?? true,
        pauseFor: options.pauseFor ?? 6500,
        cursor: options.pauseFor ?? "",
        wrapperClassName: wrapperClassName,
    }); ;
};

const formatCommaSeparatedListToArray = (commaSeparatedList: string) => {
    return commaSeparatedList.split(",").map(item => item.trim());
};
