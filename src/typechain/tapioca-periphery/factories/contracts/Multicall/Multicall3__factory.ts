/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Multicall3,
  Multicall3Interface,
} from "../../../contracts/Multicall/Multicall3";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.CallValue[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "multicallValue",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461005b5760008054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a361095390816100618239f35b600080fdfe604060808152600436101561001357600080fd5b600090813560e01c9182636e5a9cbb1461006d5750508063715018a6146100685780638da5cb5b14610063578063e8bbf5d71461005e5763f2fde38b1461005957600080fd5b610390565b6102cd565b6102a4565b610246565b61007636610136565b829161008182610555565b9361008a610752565b50805b8381106100b2576100ae86886100a48834146107f8565b51918291826101cf565b0390f35b6100bc81876105f0565b5161012361011f6100d66100d1858989610775565b610797565b9261011986808d870151809c019b60606100f6895160018060a01b031690565b980151978851916020809a01915af161010d61072c565b95830195865215158252565b51151590565b1590565b610130575060010161008d565b51610855565b906020600319830112610182576004356001600160401b039283821161018257806023830112156101825781600401359384116101825760248460051b83010111610182576024019190565b600080fd5b60005b83811061019a5750506000910152565b818101518382015260200161018a565b906020916101c381518092818552858086019101610187565b601f01601f1916010190565b602080820190808352835180925260409283810182858560051b8401019601946000925b858410610204575050505050505090565b909192939495968580610235600193603f1986820301885286838d51805115158452015191818582015201906101aa565b9901940194019295949391906101f3565b34610182576000806003193601126102a157610260610421565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b34610182576000366003190112610182576000546040516001600160a01b039091168152602090f35b6102d636610136565b6102df81610555565b906102e86105bd565b50600092835b82811061030357604051806100ae86826101cf565b61030d81856105f0565b5161036f61011f610327610322858888610609565b610690565b8051909390610341906001600160a01b03163b15156106e7565b8351610119908a9081906040906001600160a01b031697015196875190826020809a01915af161010d61072c565b61013057506001016102ee565b35906001600160a01b038216820361018257565b34610182576020366003190112610182576004356001600160a01b038116808203610182576103bd610421565b156103cd576103cb90610479565b005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b6000546001600160a01b0316330361043557565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3565b634e487b7160e01b600052604160045260246000fd5b60405190606082018281106001600160401b038211176104f557604052565b6104c0565b60405190608082018281106001600160401b038211176104f557604052565b6040519190601f01601f191682016001600160401b038111838210176104f557604052565b6001600160401b0381116104f55760051b60200190565b906105676105628361053e565b610519565b8281528092610578601f199161053e565b016000805b82811061058a5750505050565b60409081518281018181106001600160401b038211176104f557602093528381528260608183015282870101520161057d565b6105c56104d6565b90600082526000602083015260606040830152565b634e487b7160e01b600052603260045260246000fd5b80518210156106045760209160051b010190565b6105da565b91908110156106045760051b81013590605e1981360301821215610182570190565b3590811515820361018257565b6001600160401b0381116104f557601f01601f191660200190565b81601f820112156101825780359061066d61056283610638565b928284526020838301011161018257816000926020809301838601378301015290565b606081360312610182576106a26104d6565b906106ac8161037c565b82526106ba6020820161062b565b60208301526040810135906001600160401b038211610182576106df91369101610653565b604082015290565b156106ee57565b60405162461bcd60e51b8152602060048201526016602482015275135d5b1d1a58d85b1b0e881b9bc818dbdb9d1c9858dd60521b6044820152606490fd5b3d1561074d573d9061074061056283610638565b9182523d6000602084013e565b606090565b61075a6104fa565b90600082526000602083015260006040830152606080830152565b91908110156106045760051b81013590607e1981360301821215610182570190565b608081360312610182576107a96104fa565b906107b38161037c565b82526107c16020820161062b565b6020830152604081013560408301526060810135906001600160401b038211610182576107f091369101610653565b606082015290565b156107ff57565b60405162461bcd60e51b815260206004820152601a60248201527909aead8e8d2c6c2d8d8667440ecc2d8eaca40dad2e6dac2e8c6d60331b6044820152606490fd5b9060206108529281815201906101aa565b90565b60448151106108e757600481015181019060208160248401930312610182576024810151906001600160401b03821161018257019080604383011215610182576024820151916108a761056284610638565b9183835260448483010111610182576108e3926108cb916044602085019101610187565b60405162461bcd60e51b815291829160048301610841565b0390fd5b60405162461bcd60e51b815260206004820152600e60248201526d2932b0b9b7b7103ab735b737bbb760911b6044820152606490fdfea2646970667358221220f8cdbd3461ba448aae6b69f7fb4bd96f4e955d46019cb9d2315deee80a30847464736f6c63430008120033";

type Multicall3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Multicall3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multicall3__factory extends ContractFactory {
  constructor(...args: Multicall3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Multicall3";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Multicall3> {
    return super.deploy(overrides || {}) as Promise<Multicall3>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Multicall3 {
    return super.attach(address) as Multicall3;
  }
  override connect(signer: Signer): Multicall3__factory {
    return super.connect(signer) as Multicall3__factory;
  }
  static readonly contractName: "Multicall3";

  public readonly contractName: "Multicall3";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Multicall3Interface {
    return new utils.Interface(_abi) as Multicall3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall3 {
    return new Contract(address, _abi, signerOrProvider) as Multicall3;
  }
}
