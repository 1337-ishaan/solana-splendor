import React from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import {IPopup} from "./types";
import {NextPage} from "next";

export const Popup: NextPage<IPopup> = ({ title, text, closePopup }) => {
    return (
        <div className={classes.popupContainer}>
            <div className={classes.popupModal}>
                <div className={classes.header}>
                    <p>{title}</p>
                    <div className={classes.closeBtn} onClick={closePopup}>X</div>
                </div>
                <div className={classes.body}>
                    <p>
                        {text}
                    </p>
                    <div className={`${classes.okBtn}`} onClick={closePopup}>
                        <Link
                            href="#"
                            className={"btn"}
                            onClick={closePopup}
                        >
                            Ok
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
