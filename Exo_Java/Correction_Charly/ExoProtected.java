public class ExoProtected {
	
	public static void main(String[] args) {
		B b = new B();
		b.setVar1(123);
		System.out.println(b.getVar1());
	}
}

class A {
	protected int var1;			// visible dans les sous-classes
	private int var2;			// invisible dans les sous-classes
}

class B extends A {
	
	public int getVar1() {
		return var1;			// OK car c'est protected
	}
	
	public void setVar1(int val) {
		this.var1 = val;
	}
	
	//public int getVar2() {
	//	return var2;			// INTERDIT car c'est private
	//}
}