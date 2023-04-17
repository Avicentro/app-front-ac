const IDEMPOTENT = "IDEMPOTENT";

const handleIdempotent = (state: any, _: any) => state;
const VO_BASE = { [IDEMPOTENT]: handleIdempotent };

const actionInit = {
  type: IDEMPOTENT,
  payload: "",
};

export default IDEMPOTENT;
export { VO_BASE, actionInit };
