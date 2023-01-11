import React, { FC, useEffect, useState, KeyboardEvent } from 'react';
import { IRatingProps } from './Rating.props';
import RatingStar from './rating.svg';
import cn from 'classnames';

import styles from './Rating.module.css';

const Rating: FC<IRatingProps> = ({
    rating,
    setRating,
    isEditable = false,
    className,
    ...props
}): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    onMouseEnter={() => changeDisplayOfRating(i + 1)}
                    onMouseLeave={() => changeDisplayOfRating(rating)}
                    onClick={() => handleClickRating(i + 1)}
                >
                    <RatingStar
                        className={cn(styles.star, {
                            [styles.filled]: i < currentRating,
                            [styles.editable]: isEditable,
                        })}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
                            handleSpace(e, i + 1)
                        }
                        tabIndex={isEditable ? 0 : -1}
                    />
                </span>
            );
        });
        setRatingArray(updateArray);
    };

    const changeDisplayOfRating = (index: number) => {
        if (!isEditable) return;

        constructRating(index);
    };

    const handleClickRating = (num: number) => {
        if (!isEditable || !setRating) return;
        setRating(num);
    };

    const handleSpace = (e: KeyboardEvent, num: number) => {
        if (!isEditable || !setRating) return;

        if (e.code !== 'Space') return;

        if (e.code === 'Space') {
            setRating(num);
        }
        // console.log(e);
    };
    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
};

export { Rating };
