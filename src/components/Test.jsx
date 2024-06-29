import { useAtom, useAtomValue } from 'jotai';
import React from 'react';
import { progressAtom } from '../lib/testAtom';

function Test(props) {
    const progress = useAtomValue(progressAtom)
    return (
        <div>{Math.trunc(progress * 100)}% watched</div>
    );
}

export default Test;