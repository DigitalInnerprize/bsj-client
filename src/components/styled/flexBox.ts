import styled from 'styled-components';
import is from 'typescript-styled-is';
import { media } from '../../utils/mediaQueries.ts';

type SharedProps = {
    textCenter?: boolean;
    textRight?: boolean;
    textLeft?: boolean;
};

type FlexProps = SharedProps & {
    marginTop?: string;
    marginBottom?: string;
    inline?: boolean;
    row?: boolean;
    rowReverse?: boolean;
    column?: boolean;
    columnReverse?: boolean;
    noWrap?: boolean;
    wrap?: boolean;
    wrapReverse?: boolean;
    justifyStart?: boolean;
    justifyEnd?: boolean;
    justifyCenter?: boolean;
    justifyAround?: boolean;
    justifyBetween?: boolean;
    contentStart?: boolean;
    contentEnd?: boolean;
    contentCenter?: boolean;
    contentSpaceBetween?: boolean;
    contentSpaceAround?: boolean;
    contentStretch?: boolean;
    alignStart?: boolean;
    alignEnd?: boolean;
    alignCenter?: boolean;
    alignBaseline?: boolean;
    alignStretch?: boolean;
    full?: boolean;
    center?: boolean;
    marginAuto?: boolean;
    columnMobile?: boolean;
};

type FlexItemProps = SharedProps & {
    inlineBlock?: boolean;
    inlineFlex?: boolean;
    displayFlex?: boolean;
    flex?: number;
    order?: number | string;
    basis?: string;
    grow?: number | string;
    shrink?: number | string;
    noShrink?: boolean;
    paddingLeft?: string;
    paddingRight?: string;
    marginTop?: string;
    marginBottom?: string;
};

/**
 * Flexbox container with multitude of options
 * @param inline Boolean - display: inline-flex;
 * @param row Boolean - Default flex-direction
 * @param rowReverse Boolean - flex-direction
 * @param column Boolean - flex-direction
 * @param columnReverse Boolean - flex-direction
 * @param noWrap Boolean - Default flex-wrap
 * @param wrap Boolean - flex-wrap
 * @param wrapReverse Boolean - flex-wrap
 * @param justifyStart Boolean - Default justify-content
 * @param justifyEnd Boolean - justify-content
 * @param justifyCenter Boolean - justify-content
 * @param justifyAround Boolean - justify-content
 * @param justifyBetween Boolean - justify-content
 * @param contentStart Boolean - align-content
 * @param contentEnd Boolean - align-content
 * @param contentCenter Boolean - align-content
 * @param contentSpaceBetween Boolean - align-content
 * @param contentSpaceAround Boolean - align-content
 * @param contentStretch Boolean - align-content
 * @param alignStart Boolean - align-items
 * @param alignEnd Boolean - align-items
 * @param alignCenter Boolean - align-items
 * @param alignBaseline Boolean - align-items
 * @param alignStretch Boolean - align-items
 * @param full Boolean - Width 100%, Height 100%, FlexBasis 100%
 * @param columnMobile Boolean - *media query* - flex-direction: column;
 * @param textCenter Boolean - text-align: center
 * @param textRight Boolean - text-align: right
 * @param textLeft Boolean - text-align: left
 * @param marginAuto Boolean
 * @param center
 * @returns Flex component
 */
export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    margin-top: ${props => props.marginTop && props.theme.spacing.vertical[props.marginTop]};
    margin-bottom: ${props => props.marginBottom && props.theme.spacing.vertical[props.marginBottom]};
    /********************************* display *********************************/
    /***************** http://cssreference.io/property/display *****************/
    ${is('inline')`
    display: inline-flex;
  `};
    /******************************** direction ********************************/
    /************** http://cssreference.io/property/flex-direction **************/
    ${is('row')`
    flex-direction: row; /* default */
  `};
    ${is('rowReverse')`
    flex-direction: row-reverse;
  `};
    ${is('column')`
    flex-direction: column;
  `};
    ${is('columnReverse')`
    flex-direction: column-reverse;
  `};
    /*********************************** wrap ***********************************/
    /**************** http://cssreference.io/property/flex-wrap ****************/
    ${is('noWrap')`
    flex-wrap: nowrap; /* default */
  `};
    ${is('wrap')`
    flex-wrap: wrap;
  `};
    ${is('wrapReverse')`
    flex-wrap: wrap-reverse;
  `};
    /***************************** justify-content *****************************/
    /************* http://cssreference.io/property/justify-content *************/
    ${is('justifyStart')`
    justify-content: flex-start; /* default */
  `};
    ${is('justifyEnd')`
    justify-content: flex-end;
  `};
    ${is('justifyCenter')`
    justify-content: center;
  `};
    ${is('justifyBetween')`
    justify-content: space-between;
  `};
  ${is('justifyEvenly')`
    justify-content: space-evenly;
  `};
    ${is('justifyAround')`
    justify-content: space-around;
  `};
    /****************************** align-content ******************************/
    /************** http://cssreference.io/property/align-content **************/
    ${is('contentStart')`
    align-content: flex-start;
  `};
    ${is('contentEnd')`
    align-content: flex-end;
  `};
    ${is('contentCenter')`
    align-content: center;
  `};
    ${is('contentSpaceBetween')`
    align-content: space-between;
  `};
    ${is('contentSpaceAround')`
    align-content: space-around;
  `};
    ${is('contentStretch')`
    align-content: stretch; /* default */
  `};
    /******************************* align-items *******************************/
    /*************** http://cssreference.io/property/align-items ***************/
    ${is('alignStart')`
    align-items: flex-start;
  `};
    ${is('alignEnd')`
    align-items: flex-end;
  `};
    ${is('alignCenter')`
    align-items: center;
  `};
    ${is('alignBaseline')`
    align-items: baseline;
  `};
    ${is('alignStretch')`
    align-items: stretch;
  `};
  /******************************* type *******************************/
    /*************** http://cssreference.io/property/align-items ***************/
    ${is('textCenter')`
      text-align: center;
    `}
    ${is('textLeft')`
      text-align: left;
    `}
    ${is('textRight')`
      text-align: right;
    `}
    /******************************** utilities ********************************/
    ${is('full')`
    width: 100%;
    height: 100%;
    flex-basis: 100%;
  `};
    ${is('center')`
    align-items: center;
    justify-content: center;
  `};

  ${is('marginAuto')`
    margin-left: auto;
    margin-right: auto;
  `};

    ${is('columnMobile')`
    ${media.custom('max', 922)} {
      flex-direction: column;
    }
  `};
`;

/**
 * FlexItem child component of Flex component
 * @param flex Number - * recommended approach *
 * @param displayFlex Boolean - display: flex;
 * @param inlineFlex Boolean - display: inline-flex;
 * @param inlineBlock Boolean - display: inline-block;
 * @param alignStart Boolean - align-items: flex-start;
 * @param alignEnd Boolean - align-items: flex-end;
 * @param alignCenter Boolean - align-items: center;
 * @param order Number - flex-order: Number;
 * @param basis Number - flex-basis: Number;
 * @param grow Number - flex-shrink: Number;
 * @param shrink Number - flex-shrink: Number;
 * @param noShrink Boolean - flex-shrink: 0;
 * @param textCenter Boolean - text-align: center
 * @param textRight Boolean - text-align: right
 * @param textLeft Boolean - text-align: left
 * @returns FlexItem component
 */
export const FlexItem = styled.div<FlexItemProps>`
    order: 0;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 1;
    display: block;
    flex: ${props => props.flex && props.flex};
    text-align: center;
    margin-top: ${props => props.marginTop && props.theme.spacing.vertical[props.marginTop]};
    margin-bottom: ${props => props.marginBottom && props.theme.spacing.vertical[props.marginBottom]};
    padding-left: ${props => props.paddingLeft && props.theme.spacing.horizontal[props.paddingLeft]};
    padding-right: ${props => props.paddingRight && props.theme.spacing.horizontal[props.paddingRight]};

    ${is('inlineBlock')`
    display: inline-block;
  `};

    ${is('inlineFlex')`
    display: inline-flex;
  `};

    ${is('displayFlex')`
    display: flex;
  `};

  /********************************** align **********************************/
    /****************** http://cssreference.io/property/order ******************/
    ${is('alignCenter')`
      align-self: center;
    `}

    ${is('alignStart')`
      align-self: flex-start;
    `}

    ${is('alignEnd')`
      align-self: flex-end;
    `}

    /********************************** order **********************************/
    /****************** http://cssreference.io/property/order ******************/
    ${is('order')`
    order: ${props => props.order};
  `};

    /******************************** flex-basis ********************************/
    /**************** http://cssreference.io/property/flex-basis ****************/
    ${is('basis')`
    flex-basis: ${props => props.basis};
  `};

    /******************************** flex-grow ********************************/
    /**************** http://cssreference.io/property/flex-grow ****************/
    ${is('grow')`
    flex-grow: ${props => props.grow};
  `};

    /******************************* flex-shrink *******************************/
    /*************** http://cssreference.io/property/flex-shrink ***************/
    ${is('shrink')`
    flex-shrink: ${props => props.shrink};
  `};
  
    ${is('noShrink')`
    flex-shrink: 0;
  `};

  /******************************* type *******************************/
    /*************** http://cssreference.io/property/align-items ***************/
    ${is('textCenter')`
      text-align: center;
    `}

    ${is('textLeft')`
      text-align: left;
    `}

    ${is('textRight')`
      text-align: right;
    `}
`;
