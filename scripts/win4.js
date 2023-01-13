const gameAddr = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
const contractName = "Game4";

async function main() {
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  const txn = await game.win(56);
  const receipt = await txn.wait();

  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
