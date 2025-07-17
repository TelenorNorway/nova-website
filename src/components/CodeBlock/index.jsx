import cx from "classnames";
import { Highlight } from "prism-react-renderer";

const CodeBlock = ({ code, language, className: classNameProp }) => {
  return (
    <Highlight code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className={cx(className, classNameProp)} style={style}>
            <code>
                  {tokens.map((line, idx) => {
                    return (
                      <div {...getLineProps({ line, key: `line-${idx}` })}>
                        {line.map((token, i) => {
                          return (
                            <span
                              {...getTokenProps({ token, key: `token-${i}` })}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                </code>
          </pre>
        );
      }}
    </Highlight>
  );
};

export default CodeBlock;
