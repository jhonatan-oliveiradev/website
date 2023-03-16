import { ReactElement, cloneElement } from "react";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";

interface ActiveLinkProps extends LinkProps {
	children: ReactElement;
	activeClassName: string;
}

const ActiveLink = ({
	children,
	activeClassName,
	...rest
}: ActiveLinkProps) => {
	const { asPath } = useRouter();

	const className = asPath === rest.href ? activeClassName : "";

	return (
		<Link legacyBehavior {...rest}>
			{cloneElement(children, {
				className,
			})}
		</Link>
	);
};

export default ActiveLink;
