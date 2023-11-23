import { UserProtocolPositionDayTokensDto } from './userProtocolPositionDayTokensDto';
import { UserProtocolPositionIntervalData } from './userProtocolPositionIntervalData.entity';
import BigNumber from 'bignumber.js';

export class UserProtocolPositionDayDto {
  public positionIdentifier: string;
  public date: string;
  public positionAgeSeconds: BigNumber;
  public blockNumber: number;
  public timestamp: number;
  public isEODEntry: boolean;
  public positionSharesAtBlock: BigNumber;
  public basePositionShares: BigNumber;
  public positionUsdValueAtBlock: BigNumber;
  public basePositionCostUsd: BigNumber;
  public basePositionUnitCostUsd: BigNumber;
  public netMarketGainUsd: BigNumber;
  public netMarketGainPct: BigNumber;
  public hodlValueUsd: BigNumber;
  public roiVsHodlUsd: BigNumber;
  public roiVsHodlPct: BigNumber;
  public ifHeldAllAmountEth: BigNumber;
  public ifHeldAllAmountEthValueUsd: BigNumber;
  public ifHeldAllAmountBtc: BigNumber;
  public ifHeldAllAmountBtcValueUsd: BigNumber;
  public avgOpenInterestUsd: BigNumber;
  public cumulativeCollectedIncomeUsd: BigNumber;
  public pendingIncomeUsd: BigNumber;
  public incomeApyInception: number;
  public exitRatio: BigNumber;
  public exitedSessionLength: BigNumber;
  public exitedCostUsd: BigNumber;
  public exitedValueUsd: BigNumber;
  public exitedNetGainUsd: BigNumber;
  public exitedNetGainPct: BigNumber;
  public exitedCollectedIncomeAmount: BigNumber;
  public exitedCollectedIncomeUsd: BigNumber;
  public exitedIncomeAPY: BigNumber;
  public exitedRoiVsHodlUsd: BigNumber;
  public exitedRoiVsHodlPct: BigNumber;
  public exitedHodlValueUsd: BigNumber;
  public exitedIfHeldAllAmountEthValueUsd: BigNumber;
  public exitedIfHeldAllAmountBtcValueUsd: BigNumber;
  public dayDataTokenLedger: UserProtocolPositionDayTokensDto[];
  constructor(identifier: string, intervalData: UserProtocolPositionIntervalData) {
    this.positionIdentifier = identifier;
    this.date = intervalData.date.toLocaleDateString();
    this.positionAgeSeconds = intervalData.positionAgeSeconds;
    this.blockNumber = intervalData.blockNumber;
    this.timestamp = intervalData.timestamp;
    this.isEODEntry = intervalData.isEODEntry;
    this.positionSharesAtBlock = intervalData.positionSharesAtBlock;
    this.basePositionShares = intervalData.basePositionShares;
    // this.positionUsdValueAtBlock = intervalData.positionUsdValueAtBlock;
    // this.basePositionCostUsd = intervalData.basePositionCostUsd;
    // this.basePositionUnitCostUsd = intervalData.basePositionUnitCostUsd;
    // this.netMarketGainUsd = intervalData.netMarketGainUsd;
    // this.netMarketGainPct = intervalData.netMarketGainPct;
    // this.hodlValueUsd = intervalData.hodlValueUsd;
    // this.roiVsHodlUsd = intervalData.roiVsHodlUsd;
    // this.roiVsHodlPct = intervalData.roiVsHodlPct;
    // this.ifHeldAllAmountEth = intervalData.ifHeldAllAmountEth;
    // this.ifHeldAllAmountEthValueUsd = intervalData.ifHeldAllAmountEthValueUsd;
    // this.ifHeldAllAmountBtc = intervalData.ifHeldAllAmountBtc;
    // this.ifHeldAllAmountBtcValueUsd = intervalData.ifHeldAllAmountBtcValueUsd;
    // this.avgOpenInterestUsd = intervalData.avgOpenInterestUsd;
    // this.cumulativeCollectedIncomeUsd = intervalData.cumulativeCollectedIncomeUsd;
    // this.pendingIncomeUsd = intervalData.pendingIncomeUsd;
    // this.incomeApyInception = intervalData.incomeApyInception;
    // this.exitRatio = intervalData.exitRatio;
    // this.exitedSessionLength = intervalData.exitedSessionLength;
    // this.exitedCostUsd = intervalData.exitedCostUsd;
    // this.exitedValueUsd = intervalData.exitedValueUsd;
    // this.exitedNetGainUsd = intervalData.exitedNetGainUsd;
    // this.exitedNetGainPct = intervalData.exitedNetGainPct;
    // this.exitedCollectedIncomeAmount = intervalData.exitedCollectedIncomeAmount;
    // this.exitedCollectedIncomeUsd = intervalData.exitedCollectedIncomeUsd;
    // this.exitedIncomeAPY = intervalData.exitedIncomeAPY;
    // this.exitedRoiVsHodlUsd = intervalData.exitedRoiVsHodlUsd;
    // this.exitedRoiVsHodlPct = intervalData.exitedRoiVsHodlPct;
    // this.exitedHodlValueUsd = intervalData.exitedHodlValueUsd;
    // this.exitedIfHeldAllAmountEthValueUsd = intervalData.exitedIfHeldAllAmountEthValueUsd;
    // this.exitedIfHeldAllAmountBtcValueUsd = intervalData.exitedIfHeldAllAmountBtcValueUsd;
    this.dayDataTokenLedger = intervalData.userProtocolPositionIntervalDataToken.map(
      (dt) => new UserProtocolPositionDayTokensDto(dt),
    );
  }
}