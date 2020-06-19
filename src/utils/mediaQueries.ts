const customMediaQuery = (minOrMax: 'min' | 'max', width: number) => `@media (${minOrMax}-width: ${width}px)`;

export const media = {
    custom: customMediaQuery,
    desktop: customMediaQuery('min', 922),
    tablet: customMediaQuery('min', 768),
    phone: customMediaQuery('max', 576),
};
