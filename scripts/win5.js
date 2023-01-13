const gameAddr = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0";
const contractName = "Game5";

async function main() {
  const game = await hre.ethers.getContractAt(contractName, gameAddr);
  // const signer1 = await hre.ethers.getSigner(0);

  await game.giveMeAllowance(10000);
  await game.mint(10000);
  const txn = await game.win();

  const receipt = await txn.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
