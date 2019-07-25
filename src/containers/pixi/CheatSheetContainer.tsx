import React from 'react';
import CheatSheet from '../../pixi-component/CheatSheet';
import { connect } from 'react-redux';
import { RootState } from '../../modules';
import { KanmusuCount } from '../../lib/utils';

type OwnProps = {};
type StateProps = {
  kanmusu: KanmusuCount;
};
type DispatchProps = {};

type CheatSheetContainerProps = OwnProps & StateProps & DispatchProps;

const CheatSheetContainer: React.FC<CheatSheetContainerProps> = ({
  kanmusu
}) => {
  return <CheatSheet kanmusu={kanmusu} />;
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  state => ({
    kanmusu: state.kanmusu
  })
)(CheatSheetContainer);
