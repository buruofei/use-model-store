import React, { useMemo, useEffect, useLayoutEffect, useState } from 'react';

function Sibling() {
    useMemo(() => {
        console.log('siblingmemo1');
    });

    useEffect(() => {
        console.log('siblingEffectcreate1');
        return () => {
            console.log('siblingEffectdestore1');
        };
    });

    // useLayoutEffect(() => {
    //     console.log('siblingLayoutEffectcreate1');
    //     return () => {
    //         console.log('siblingLayoutEffectdestore1');
    //     };
    // }, []);
    useMemo(() => {
        console.log('siblingmemo2');
    });

    useEffect(() => {
        console.log('siblingEffectcreate2');
        return () => {
            console.log('siblingEffectdestore2');
        };
    });

    const [state, setState] = useState(0);
    return (
        <div onClick={() => {
            const newS = state + 1;
            setState(newS);
        }}>
            Sibling
        </div>
    );
}

export default Sibling;
