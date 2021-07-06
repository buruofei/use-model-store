import React, { useMemo, useEffect, useLayoutEffect } from 'react';

function Son() {
    useMemo(() => {
        console.log('sonmemo1');
    });

    useEffect(() => {
        console.log('sonEffectcreate1');
        return () => {
            console.log('sonEffectdestore1');
        };
    });

    // useLayoutEffect(() => {
    //     console.log('sonLayoutEffectcreate1');
    //     return () => {
    //         console.log('sonLayoutEffectdestore1');
    //     };
    // }, []);
    useMemo(() => {
        console.log('sonmemo2');
    });

    useEffect(() => {
        console.log('sonEffectcreate2');
        return () => {
            console.log('sonEffectdestore2');
        };
    });
    return (
        <div>
            Son
        </div>
    );
}

export default Son;
