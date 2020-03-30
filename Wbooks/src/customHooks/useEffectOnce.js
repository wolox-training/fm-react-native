import { EffectCallback, useEffect } from 'react';

const useEffectOnce = async (effect: EffectCallback) => {
  await useEffect(effect, []);
};
export default useEffectOnce;
