import React from 'react';
import CheatSheet from '../../pixi-component/CheatSheet';
import { connect } from 'react-redux';
import { RootState } from '../../modules';
import { KanmusuList } from '../../lib/utils';

type OwnProps = {};
type StateProps = {
  data: KanmusuList;
};
type DispatchProps = {};

type CheatSheetContainerProps = OwnProps & StateProps & DispatchProps;

const CheatSheetContainer: React.FC<CheatSheetContainerProps> = ({
  data: kanmusuList
}) => {
  return <CheatSheet kanmusu={kanmusuList} />;
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  state => ({
    data: state.kanmusu.data
  })
)(CheatSheetContainer);
