import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  useToast,
  useDisclosure,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { addCartItem } from "../features/cartSlice";
import ProductModal from "./ProductModal";
import { IProduct } from "../type/product";

interface Props {
  productData: IProduct;
}

const Product = ({ productData }: Props) => {
  const { cart } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickAddCart = () => {
    dispatch(addCartItem(productData));
    toast({
      description: "장바구니에 담겼습니다.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={productData.mainImage}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{`${productData.idx}. ${productData.name}`}</Heading>
            <Flex>
              <Text color="blue.600" fontSize="2xl">
                {`${productData.price.toLocaleString("ko-KR")}원`}
              </Text>
              <Badge ml="1" fontSize="0.8em">
                {productData.spaceCategory}
              </Badge>
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue" onClick={onOpen}>
              상세정보
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => dispatch(handleClickAddCart)}
            >
              장바구니 담기
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <ProductModal
        isOpen={isOpen}
        onClose={onClose}
        productData={productData}
      />
    </>
  );
};

export default Product;
