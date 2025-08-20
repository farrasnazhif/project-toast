import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast";
import useToggle from "../../hooks/useToggle";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [isHidden, toggleIsHidden] = useToggle();
  const [variant, setVariant] = React.useState("notice");
  const [comment, setComment] = React.useState("");

  console.log(isHidden);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isHidden && (
        <Toast
          comment={comment}
          variant={variant}
          handleDismiss={toggleIsHidden}
        />
      )}

      <div className={styles.controlsWrapper}>
        <form
          className={styles.row}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
              required={true}
            />
          </div>
        </form>

        <form
          className={styles.row}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className={styles.label}>Variant</div>

          {VARIANT_OPTIONS.map((option) => (
            <div
              key={option}
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <label htmlFor={option}>
                <input
                  id={option}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === variant}
                  onChange={(event) => {
                    setVariant(event.target.value);
                  }}
                />
                {option}
              </label>{" "}
            </div>
          ))}
        </form>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={toggleIsHidden} disabled={!comment || isHidden}>
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
