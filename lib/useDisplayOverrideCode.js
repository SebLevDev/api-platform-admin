import { useState } from 'react';
const useDisplayOverrideCode = () => {
    const [displayed, setDisplayed] = useState(false);
    return (code) => {
        if (process.env.NODE_ENV === 'production')
            return;
        if (!displayed) {
            // eslint-disable-next-line no-console
            console.info(code);
            setDisplayed(true);
        }
    };
};
export default useDisplayOverrideCode;
//# sourceMappingURL=useDisplayOverrideCode.js.map