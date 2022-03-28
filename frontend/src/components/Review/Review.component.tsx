import React from 'react';

import { Star } from './Star';

import * as UI from './Review.styles';
import { COLORS } from '../../constants/colors';
import { IReview } from '../../models/IReview';
import { IUser } from '../../models/IUser';
import { getShortName } from '../../utils/nameUtils';

interface IReviewProps {
  review: IReview;
  user: IUser;
}

export const Review: React.FC<IReviewProps> = ({ review, user }) => {
  const {
    Comment: comment,
    Advantages: advantages,
    Disadvantages: disadvantages,
    Rate: rate,
    CreateDate: createDate,
  } = review;

  const userHasPhoto = false;

  console.log(user);

  return (
    <UI.ReviewWrapper>
      <UI.Header>
        <UI.HeaderLeftPart>
          <UI.UserPhotoWrapper>
            {userHasPhoto ? (
              <UI.UserPhoto />
            ) : (
              <UI.PhotoPlaceholder>{getShortName(user.name)}</UI.PhotoPlaceholder>
            )}
          </UI.UserPhotoWrapper>
        </UI.HeaderLeftPart>
        <UI.HeaderRightPart>
          <UI.HeaderRightUpperPart>
            <UI.UserName>{user.name}</UI.UserName>
            <UI.CreateDate>23 мин. назад</UI.CreateDate>
          </UI.HeaderRightUpperPart>
          <UI.HeaderRightBottomPart>
            {new Array(5).fill(0).map((_, index) => (
              <Star rate={index + 1} fill={index + 1 <= rate} key={index} />
            ))}
          </UI.HeaderRightBottomPart>
        </UI.HeaderRightPart>
      </UI.Header>

      <UI.Content>
        <UI.CommentWrapper>
          <UI.CommentLeftPart>
            <UI.Svg fill={COLORS.COMMENT_ICON}>
              <UI.Path
                d="M24 10c0-6.5-5-10-12-10S0 3.5 0 10s5 9.971 11 9.971v2.559c0 .507 0 .76.159 1.008.11.173.376.368.574.423.283.078.47.02.845-.096C18 22 24 16.5 24 10zm-6-3v2H6V7h12zm-4 4H6v2h8v-2z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </UI.Svg>
          </UI.CommentLeftPart>
          <UI.CommentRightPart>
            <UI.CommentText>{comment}</UI.CommentText>
          </UI.CommentRightPart>
        </UI.CommentWrapper>

        <UI.AdvantageWrapper>
          <UI.AdvantageLeftPart>
            <UI.Svg fill={COLORS.PLUS_ICON}>
              <UI.Path d="M11 11H5v2h6v6h2v-6h6v-2h-6V5h-2v6z" />
            </UI.Svg>
          </UI.AdvantageLeftPart>
          <UI.AdvantageRightPart>
            <UI.AdvantageText>{advantages}</UI.AdvantageText>
          </UI.AdvantageRightPart>
        </UI.AdvantageWrapper>

        <UI.DisadvantageWrapper>
          <UI.DisadvantageLeftPart>
            <UI.Svg fill={COLORS.MINUS_ICON}>
              <UI.Path d="M3 11h18v2H3z" />
            </UI.Svg>
          </UI.DisadvantageLeftPart>
          <UI.DisadvantageRightPart>
            <UI.DisadvantageText>{disadvantages}</UI.DisadvantageText>
          </UI.DisadvantageRightPart>
        </UI.DisadvantageWrapper>
      </UI.Content>
    </UI.ReviewWrapper>
  );
};
