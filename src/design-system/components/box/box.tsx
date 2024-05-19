import {forwardRef, useMemo} from 'react';
import {
    composeRestyleFunctions,
    createBox,
    createRestyleComponent,
    useRestyle,
} from '@shopify/restyle';
import {backgroundColor, border, spacing, transparency} from '../../restyle';
import {Theme} from '../../theme';
import { FlexProps, PolymorphicBox } from '../types';

const functions = [spacing, border, backgroundColor, transparency];

export const RestyleBox = createBox<Theme>();

export const Box = forwardRef(function Box(
    {as: Component = RestyleBox, ...rest}, ref,
    ) {

    const props = useRestyle(
        // @ts-ignore
        composeRestyleFunctions<Theme, BoxProps>(functions),
        rest,
    );

    const BoxComponent = useMemo(
        () => createRestyleComponent(functions, Component),
        [Component],
    );
    return <BoxComponent ref={ref} {...props} />
}) as PolymorphicBox;

export function Flex({children, ...props}: FlexProps) {
    return (
        <Box flex={1} {...props}>
            { children }
        </Box>
    );
}
