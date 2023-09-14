import { Dispatch, FC, memo, SetStateAction } from "react";

// Components
import LeftArrow from "../../../../../icons/LeftArrow";
import RightArrow from "../../../../../icons/RightArrow";
import { theme } from "../../../../../../static/styles/theme";

// Styles
import { DetailColumn } from "../../styles";
import { FooterWrapper, PagingInfo } from "./styles";

// helpers
import { pagingType } from "../../../../../../models";

interface FooterProps {
  paging?: pagingType;
  setPage?: Dispatch<SetStateAction<number>>;
}

const Footer: FC<FooterProps> = ({ paging, setPage }) => {
  if (!paging) return null;

  const canRight = () => paging?.page !== paging?.totalPages;

  const canLeft = () => paging?.page !== 1;

  const moveRight = () =>
    setPage?.((prev: number) => (canRight() ? prev + 1 : prev));

  const moveLeft = () =>
    setPage?.((prev: number) => (canLeft() ? prev - 1 : prev));

  const getDisabledColor = (canMove: () => boolean) =>
    canMove() ? theme.primary : theme.coolGray300;

  const getDisabled = (canMove: () => boolean) => (canMove() ? "" : "disabled");

  return (
    <FooterWrapper>
      <PagingInfo>
        <span>
          página <strong>{paging?.page}</strong> de{" "}
          <strong>{paging?.totalPages}</strong>
        </span>
      </PagingInfo>
      <DetailColumn>
        <span onClick={moveLeft} className={getDisabled(canLeft)}>
          <LeftArrow fill={getDisabledColor(canLeft)} />
        </span>
        {[...Array(paging?.totalPages)].map((_, idx) => (
          <button
            key={`button-${idx}`}
            className={`paginate-button ${
              idx + 1 === paging?.page ? "selected" : ""
            }`}
            onClick={() => setPage?.(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <span onClick={moveRight} className={getDisabled(canRight)}>
          <RightArrow fill={getDisabledColor(canRight)} />
        </span>
      </DetailColumn>
    </FooterWrapper>
  );
};

export default memo(Footer);
