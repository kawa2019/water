import { describe, it, expect } from 'vitest';
import {bubbleSort} from "../sort/bubble";

describe('bubbleSort', () => {
    it('sorts array', () => {
        expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    });
});
