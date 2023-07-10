import { LoaderWrapper, Spinner } from "@/styled/common/loader.styles";

/**
 * This component allows to render a preloader in the application when the data is loading
 */

export const Loader = () => {
  return (
    <LoaderWrapper>
        <Spinner/>
    </LoaderWrapper>
  );
};